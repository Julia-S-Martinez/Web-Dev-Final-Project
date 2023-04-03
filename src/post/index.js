const Post = (
    {}
) => {
    return(<><div className="card mb-3 mx-2">
        <div className="d-flex w-100 justify-content-between card-header">
            <h3 className="">Post title</h3>
            <div>
            <small className="mx-2">Author username</small>
            <img className="rounded-circle" height={48} width={48}
                 src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"/>
            </div>
        </div>
        <div className="card-body d-flex w-100 justify-content-between">
            <div><h5 className="card-title">Song title</h5>
            <h6 className="card-subtitle text-muted">Artist</h6></div>
            <div><img height={100} width={100} src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png"/></div>
        </div>
        <div className="card-body">
            <p className="card-text">Text about recommending a song.</p>
        </div>

        <div className="card-body">
            <a href="#" className="card-link">Artist</a>
            <a href="#" className="card-link">Genre1</a>
            <a href="#" className="card-link">Genre2</a>
        </div>
        <div className="card-footer text-muted">
            2 days ago
        </div>
    </div></>)
};

export default Post;