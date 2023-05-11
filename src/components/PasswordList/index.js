import './index.css'

const PasswordList=(props)=>{
    const {details,isShown,isDeleted}=props
    const {id,website,userName,password,color}=details
    const toDelete=()=>{
        isDeleted(id)
    }

    return(
        <li className="pass-list">
            <div className="pass-con">
                <p className={`${color} initial`}>{userName[0].toUpperCase()}</p>
                <div className="details">
                    <p className="website">{website}</p>
                    <p className="website">{userName}</p>
                    {isShown ? <p className="website">{password}</p> :<img src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png" alt="star" className="star"/> }
                </div>
            </div>
            <button className="delete" type="button" onClick={toDelete}>
                <img src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png" alt="delete" className="delete-img"/>
            </button>
        </li>
    )
}

export default PasswordList