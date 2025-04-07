function TextPanel({icon,text}) {
    return ( 
       <div className="flex text-panel justify-start px-3 py-4 gap-3"> 
        <div className="icon text-red-200"><b>{icon}</b></div>
        <p className="simple-text">
            {text}
        </p>
      </div>
     );
}

export default TextPanel;