import './Warning.css'

export function Warning({warnings}) {
    if (warnings == undefined || warnings.length == 0){
        return (<></>)
    }
    
    return (
        <div className='warning'>
            <h2>⚠️ Waarschuwing</h2>
            {warnings.map(item => {
                return <p>{item.warning_description}</p>
            })}
        </div>
    )
    
}