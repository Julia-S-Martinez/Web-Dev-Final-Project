const Comment = () => {
    return(
        <div className="row d-flex align-items-center">
            <div className="col-2">
                <img className="w-75 rounded-circle" src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"/>
            </div>
            <div className="col-10">
                <div>
                    <div className="fw-bold">
                        Username
                    </div>
                    <div>
                        i love this song
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Comment;