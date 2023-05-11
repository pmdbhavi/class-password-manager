import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordList from '../PasswordList'
import './index.css'

const backgroundColors=[
    'orange',
    'red',
    'blue',
    'purple',
    'green',
    'yellow'
]

class PasswordManager extends Component{
    state={list:[],website:'',userName:'',password:'',isShown:false,input:''}

    onChangeWebsite=(event)=>{
        this.setState({website:event.target.value})
    }

    onChangeUsername=(event)=>{
        this.setState({userName:event.target.value})
    }

    onChangePassword=(event)=>{
        this.setState({password:event.target.value})
    }

    showPassword=()=>{
        this.setState(prevState=>({isShown:!prevState.isShown}))
    }

    onChangeInput=(event)=>{
        this.setState({input:event.target.value})
    }

    onDelete=(id)=>{
        const {list}=this.state
        const filterList=list.filter(each=>each.id!==id)
        this.setState({list:filterList})
    }

    addPassword=(event)=>{
        event.preventDefault()
        const {website,userName,password}=this.state
        const backgroundColor=backgroundColors[Math.ceil(Math.random()*(backgroundColors.length-1))]
        const newPassword={
            id:uuidv4(),
            website,
            userName,
            password,
            color:backgroundColor
        }
        this.setState(prevState=>({
            list:[...prevState.list,newPassword],
            website:'',
            userName:'',
            password:''
        }))
    }

    filteredList=()=>{
        const {list,input}=this.state
        const filteredItem=list.filter(each=>each.website.toLowerCase().includes(input.toLowerCase()))
        return filteredItem
    }

    render(){
        const {list,website,userName,password,isShown,input}=this.state
        return(
            <div className="main-container">
                <img src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png" alt="app logo" className="logo" />
                <div className="container">
                    <img src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png" alt="password" className="password-man"/>
                    <div className="form-container">
                        <h1 className="heading">Add New Password</h1>
                        <form className="form" onSubmit={this.addPassword}>
                            <div className="website-con">
                                <img src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png" alt="website" className="webimg"/>
                                <hr className="hr"/>
                                <input type="text" placeholder="Enter Website" className="input" value={website} onChange={this.onChangeWebsite} />
                            </div>
                            <div className="website-con">
                                <img src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png" alt="website" className="webimg"/>
                                <hr className="hr"/>
                                <input type="text" placeholder="Enter Username" className="input" value={userName} onChange={this.onChangeUsername} />
                            </div>
                            <div className="website-con">
                                <img src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png" alt="website" className="webimg"/>
                                <hr className="hr"/>
                                <input type="password" placeholder="Enter Password" className="input" value={password} onChange={this.onChangePassword} />
                            </div>
                            <div className="button-con">
                                <button className="button" type="submit">Add</button>
                            </div>
                        </form>
                    </div>
                    <img src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png" alt="password manager" className="image"/>
                </div>
                <div className="password-con">
                    <div className="header">
                        <h1 className="head">Your Passwords <span className="num">{list.length}</span></h1>
                        <div className="search-con">
                            <img src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" alt="search icon" className="search-img"/>
                            <hr className="hr1"/>
                            <input type="search" placeholder="Search" className="search" value={input} onChange={this.onChangeInput}/>
                        </div>
                    </div>
                    <hr className="hr2"/>
                    <label className="label">
                        <input type="checkbox" value={isShown} onChange={this.showPassword}/>
                        Show Password
                    </label>
                    {list.length ===0 ?
                    <div className="no-passwords">
                        <img src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" alt="no passwords" className="no-image"/>
                        <p className="para">No Passwords</p>
                    </div> :
                    <ul className="ul">
                        {this.filteredList().map(each=>(
                            <PasswordList details={each} key={each.id} isDeleted={this.onDelete} isShown={isShown} />
                        ))}
                    </ul>}
                </div>
            </div>
        )
    }
}

export default PasswordManager