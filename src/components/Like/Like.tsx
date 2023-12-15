import { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface Props {
    onClicked: () => void
}

function Like({ onClicked }: Props) {
    const [isLiked, setIsLiked] = useState(false);

    const toggle = () => {
        setIsLiked(!isLiked);
        onClicked();
    }
    
    return <>
        {isLiked
            ? <MdFavorite color={'red'} size={20} onClick={toggle} />
            : <MdFavoriteBorder  size={20} onClick={toggle} />
        }
    </>
}

export default Like;