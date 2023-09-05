import TypeButton from "@/types/props/typeButton"
import Image from "next/image"

function Button(props:TypeButton) {
    return(
            <div className={`Btn-Size-${props.Size} Btn-Emphasis-${props.Emphasis}-Enabled-${props.Enabled} px-8 py-1.5 justify-center items-center gap-3 inline-flex m-4`}>
                {props.Icon == "Leading" && <div className="SystemBounding w-6 h-6 relative"><Image src="/bounding.svg" alt={""} width={40} height={40}/>  </div>}
                {props.Label}
                {props.Icon == "Trailing" && <div className="SystemBounding w-6 h-6 relative"><Image src="/bounding.svg" alt={""} width={40} height={40}/>  </div>}
            </div>
    )
}
export default Button