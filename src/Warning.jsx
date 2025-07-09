import './Warning.css'

export function Warning({warnings}) {
    console.log(warnings);

    if (warnings == undefined || warnings.length == 0){
        return (<></>)
    }
    
    return (
        <div>
            {warnings.map((item, index) => {
                return <WarningMessage warning={item} key={index}/>
            })}
        </div>
    )
    
}

export function WarningMessage({warning, index}) {
    if (warning.warning_description == null) {
        return
    }

    if (String(warning.warning_type).includes("VERBOD")) {
        return (
            <div className='warning ban' key={index}>
                <h2>🛑 Zwemverbod</h2>
                <p>{warning.warning_description}</p>
            </div>
        )  
    }

    return (
        <div className='warning'>
            <h2>⚠️ Waarschuwing</h2>
            <p>{warning.warning_description}</p>
        </div>
    )
}