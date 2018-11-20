'use strict'

// alert('Reloaded:' + '\n----------' + '\n' + Date())

// Webpack Devilry
//-------------------------------------------------
require('./styles/Index.css')

// Modules
//-------------------------------------------------
const Sanctuary = require('sanctuary')
const React     = require('react')
const ReactDOM  = require('react-dom')
const { withStyles } = require('@material-ui/core/styles')
const { fade } = require('@material-ui/core/styles/colorManipulator')

const { 
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography
} = require('@material-ui/core')

const MenuIcon = require('@material-ui/icons').Menu
const SearchIcon = require('@material-ui/icons').Search


// Sanctuary init
//-------------------------------------------------
const S = Sanctuary.create({checkTypes: true, env: Sanctuary.env})
const {
  add
} = S // This could then be exported in turn

// https://github.com/joshburgess/eslint-config-standard-pure-fp

// Set up the main application GUI
//-------------------------------------------------
// https://reactjs.org/docs/rendering-elements.html#rendering-an-element-into-the-dom
// https://reactjs.org/docs/react-api.html#reactpurecomponent
// https://www.robinwieruch.de/minimal-react-webpack-babel-setup/

// const styles = {
//   root: {
//     flexGrow: 1
//   }
// }


// material-ui replace roboto font

const styles = theme => ({
  root: {
    width: '100%',
    font: "Nunito Sans"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});


const MyAppBar = React.memo(withStyles (styles) (function MyAppBar(props) {
  const { classes } = props
  return (  
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <h2>
          {props.title}
        </h2>
        <div className={classes.grow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}))

// console.log(AppBar)

ReactDOM.render(<MyAppBar title="Test App" />, document.getElementById('app'))