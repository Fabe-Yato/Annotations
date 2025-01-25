import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai"
import "./Notes.css"
import "./Notes-priority.css"

const Notes = ({ data }) => {
    return(
        <>
            <li className={data.priority ? "notepad-infos-priority": "notepad-infos"}>
                <div>
                    <h2>{data.title}</h2>
                    <div>
                        <AiTwotoneDelete size="24"/>
                    </div>
                </div>

                <textarea defaultValue={data.notes} />
                <span>
                    <AiOutlineExclamationCircle size="24"/>
                </span>
            </li>
        </>
    )
}

export default Notes;