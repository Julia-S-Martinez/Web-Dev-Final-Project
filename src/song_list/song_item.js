import React from "react";
const SongItem = (
    {
        song = { name: 'Honeybee', artist: 'Unknown Mortal Orchestra', image: 'umo.png' ,
        date: '3/21/23', favorite: 1}
    }
) => {
    return(
        <div className="p-1 ps-0">
            <div className="d-flex border border-white border-1 rounded-3 p-1">
                <img className="rounded-2" style={{width: "150px", height: "150px"}} src={ song.image }/>
                <div className="ps-2">
                    <h4 className="mb-0 pt-1">{song.name}
                        <i className="bi bi-heart ps-1 pe-2"></i>
                    </h4>
                    <div>{song.artist}</div>
                </div>
            </div>
        </div>
    );
};
export default SongItem;