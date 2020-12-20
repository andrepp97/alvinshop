import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

// OTHER IMPORTS
import APIRequest from '../../api/APIRequest';
import Loader from '../../components/Loader';
import ActionDialog from '../../components/ActionDialog';
import { useStyles } from '../../assets/styles/GlobalStyle';

// FILEPOND
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const baseURL = process.env.REACT_APP_BASE_URL


const BannerPage = () => {
    // VARIABLES
    const classes = useStyles()

    // STATE
    const [prefix, setPrefix] = useState('')
    const [banners, setBanners] = useState([])
    const [loading, setLoading] = useState(true)
    const [newBanner, setNewBanner] = useState([])
    const [bannerName, setBannerName] = useState('')
    const [bannerURL, setBannerURL] = useState('')
    const [selected, setSelected] = useState(null)
    const [editMode, setEditMode] = useState(false)

    // EDIT STATE
    const [editBanner, setEditBanner] = useState([])
    const [editName, setEditName] = useState('')
    const [editURL, setEditURL] = useState('')
    
    // DIALOG STATE
    const [open, setOpen] = useState(false)
    const [dialogText, setDialogText] = useState('')

    // HANDLE DIALOG
    const handleOpen = () => {
        setOpen(true)
    };
    
    const handleClose = () => {
        setOpen(false)
    };

    // VALIDATION
    const validateUpload = () => {
        let err = null

        if (!bannerURL) err = "Banner URL is required"
        if (!bannerName) err = "Banner Name is required"
        if (!newBanner.length) err = "Banner is required"

        if (err) alert(err)
        return err
    }

    // CRUD
    const getBannerData = () => {
        setLoading(true)
        
        APIRequest.get('admin/showBanner')
        .then(({data}) => {
            // console.log("Banners", data)
            setBanners(data.data)
            setPrefix(data.prefix)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

    const onUploadBanner = () => {
        if (!validateUpload()) {
            setLoading(true)

            var formdata = new FormData()
            formdata.append('image', newBanner[0].file)
            formdata.append('banner_name', bannerName)
            formdata.append('url', bannerURL)

            APIRequest.post('admin/addBanner', formdata)
            .then(() => {
                getBannerData()
                setNewBanner([])
                setBannerURL('')
                setBannerName('')
            })
            .catch(err => {
                console.log(err.response)
                setLoading(false)
            })
        }
    }

    const onEditBanner = () => {
        setLoading(true)

        var formdata = new FormData()
        formdata.append('image', editBanner.length ? editBanner[0].file : null)
        formdata.append('banner_name', editName)
        formdata.append('url', editURL)
        formdata.append('id', selected)

        APIRequest.put('admin/editBanner', formdata)
        .then(() => {
            getBannerData()
            setEditMode(false)
        })
        .catch(err => {
            console.log(err.response)
            setLoading(false)
        })
    }

    const onDeleteBanner = () => {
        setLoading(true)
        const body = { id: selected }

        APIRequest.post('admin/deleteBanner', body)
        .then(() => getBannerData())
        .catch(err => {
            console.log(err.response)
            setLoading(false)
        })
    }

    // LIFECYCLE
    useEffect(() => {
        getBannerData()
    }, [])

    // RENDER
    return loading
    ? <Loader />
    : (
        <div>
            
            <div className={classes.titleBar}>
                <h2 className={classes.opacity70}>
                    Banners
                </h2>
            </div>

            <Grid container spacing={3}>

                {banners.length ? banners.map(banner => {
                    if (editMode && selected === banner.id) {
                        return (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                key={banner.id}
                            >
                                <FilePond
                                    maxFiles={1}
                                    files={editBanner}
                                    allowMultiple={false}
                                    acceptedFileTypes={['image/*']}
                                    onupdatefiles={files => setEditBanner(files)}
                                    labelIdle='<span class="filepond--label-action">Drag & Drop your Banner here</span>'
                                />
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    label="Banner Name"
                                    value={editName}
                                    className={classes.textInput}
                                    onChange={e => setEditName(e.target.value)}
                                />
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    label="Banner URL"
                                    value={editURL}
                                    className={classes.textInput}
                                    onChange={e => setEditURL(e.target.value)}
                                />
                                <div className={classes.textRight}>
                                    <Button
                                        size="small"
                                        onClick={() => {
                                            setEditMode(false)
                                            setSelected(null)
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <span>&nbsp;</span>
                                    <Button
                                        size="small"
                                        color="primary"
                                        variant="contained"
                                        onClick={onEditBanner}
                                    >
                                        Save
                                    </Button>
                                </div>
                            </Grid>
                        )
                    } else {
                        return (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                key={banner.id}
                            >
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            title={banner.banner_name}
                                            image={baseURL + prefix + '/' + banner.image}
                                        />
                                        <CardContent>
                                            <Typography variant="subtitle1" component="span">
                                                {banner.banner_name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button
                                            size="small"
                                            color="primary"
                                            onClick={() => {
                                                setEditMode(true)
                                                setSelected(banner.id)
                                                setEditName(banner.banner_name)
                                                setEditURL(banner.url)
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            size="small"
                                            color="secondary"
                                            onClick={() => {
                                                setDialogText(<span>Delete <strong>{banner.banner_name}</strong> ?</span>)
                                                setSelected(banner.id)
                                                handleOpen()
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }
                }) : null}

                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                >
                    <FilePond
                        maxFiles={1}
                        files={newBanner}
                        allowMultiple={false}
                        acceptedFileTypes={['image/*']}
                        onupdatefiles={files => setNewBanner(files)}
                        labelIdle='<span class="filepond--label-action">Drag & Drop your Banner here</span>'
                    />
                    <TextField
                        size="small"
                        variant="outlined"
                        label="Banner Name"
                        value={bannerName}
                        className={classes.textInput}
                        onChange={e => setBannerName(e.target.value)}
                    />
                    <TextField
                        size="small"
                        variant="outlined"
                        label="Banner URL"
                        value={bannerURL}
                        className={classes.textInput}
                        onChange={e => setBannerURL(e.target.value)}
                    />
                    <div className={classes.textRight}>
                        <Button
                            size="small"
                            color="primary"
                            variant="contained"
                            onClick={onUploadBanner}
                        >
                            Upload
                        </Button>
                    </div>
                </Grid>

            </Grid>

            <ActionDialog
                isOpen={open}
                handleClose={handleClose}
                dialogText={dialogText}
                action={onDeleteBanner}
            />

        </div>
    );
};

export default BannerPage;