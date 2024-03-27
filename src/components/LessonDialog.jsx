import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { IoIosArrowRoundForward } from "react-icons/io";

const LessonDialog = ({ data }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <div className="flex gap-1 items-center border w-fit px-1 border-black">
        <span>
          <IoIosArrowRoundForward />
        </span>
        <span className="text-xs capitalize underliney active:scale-95 transition-transform ease-in-out duration-300 cursor-pointer">
          Link to video
        </span>
      </div>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-fit translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          Tutorial Video
        </Dialog.Title>

        <iframe
          className="w-[300px] h-[200px] md:w-[620px] xl:w-[1000px] 2xl:w-[1280px] md:h-[700px]"
          src={data}
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default LessonDialog;

