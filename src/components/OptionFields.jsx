import { faImage, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TrashIcon } from "@heroicons/react/20/solid";
import { Radio } from "@material-tailwind/react";
import React from 'react'

const OptionFields = ({onDelete,index}) => {
    const placeholder = String.fromCharCode(65 + index)
    console.log(index)
  return (
    <div className="flex  gap-4 my-2 w-full items-center">
    <Radio name="color" color="purple" />
    <input type="text" placeholder={`Option ${placeholder}`} className=" placeholder-[#707070] bg-[#F5F6F7] w-full h-[40px] rounded-md px-3"/>
    <FontAwesomeIcon icon={faImage} size="lg" color="gray"/> <FontAwesomeIcon icon={faTrashCan} size="lg" color="gray" onClick={onDelete}/>
  </div>

  )
}

export default OptionFields