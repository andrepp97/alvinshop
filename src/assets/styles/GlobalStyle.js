import { makeStyles, fade } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(1),
    },
    tableContainer: {
        height: 'calc(100vh - 186px)',
        marginBottom: theme.spacing(2),
        overflow: 'auto',
    },
    titleBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade('#f2f2f2', 0.5),
        '&:hover': {
          backgroundColor: fade('#f2f2f2', 0.75),
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: '11px 0',
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
    },
    tableImage: {
      width: '40px',
      height: '40px',
      objectFit: 'cover',
      objectPosition: 'center',
      borderRadius: '4px',
    },
    textInput: {
      width: '100%',
      marginTop: '6px !important',
      marginBottom: '6px !important',
    },
    textRight: {
      textAlign: 'right',
    },
    media: {
      height: 150,
    },
    opacity70: {
        opacity: .7
    },
    mb1: {
      marginBottom: '8px',
    },
    my1: {
        marginTop: '8px !important',
        marginBottom: '8px !important',
    },
    my2: {
      marginTop: '16px',
      marginBottom: '16px',
    },
    mx1: {
        marginLeft: '4px',
        marginRight: '4px',
    },
    py1: {
        paddingTop: '8px',
        paddingBottom: '8px',
    },
}))