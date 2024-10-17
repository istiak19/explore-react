export default function User2({use}){
    const {name,email}=use
    return(
        <div>
            <h3>Name:{name}</h3>
            <p>Email:{email}</p>
        </div>
    )
}