export default function ParentToolbar(){
    return (
        <div
            className="Toolbar"
            onClick={() => {
                alert("You clicked on the taskbar !");
            }}>
                <button onClick={(e) => {

                    e.stopPropagation()
                    alert("Playing !")}}>Play Movie</button>
                <button onClick={() => 
                    alert("Uploading !")}>Upload Image</button>
        </div>
    )
}