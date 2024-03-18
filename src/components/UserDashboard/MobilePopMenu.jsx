import * as Popover from "@radix-ui/react-popover";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const MobilePopMenu = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <span className="text-black text-3xl">
          <GiHamburgerMenu />
        </span>
      </Popover.Trigger>
      {/* <Popover.Anchor /> */}
      <Popover.Portal>
        <Popover.Content
          className="rounded p-5 w-[260px] bg-white border focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={2}
        >
          <div className="flex flex-col gap-4 py-2">
            <Link to={'/dashboard'} className="font-medium w-fit text-sm text-black inline-block px-2 py-1 border">
              Courses
            </Link>
            <Link to={'/dashboard/assignment'} className="font-medium w-fit text-sm text-black inline-block px-2 py-1 border">
              Assignments
            </Link>
          </div>
          {/* <Popover.Close
            className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[10px] right-[10px] hover:bg-violet4 focus:shadow-[0_0_0_2px] border-transparent focus:shadow-violet7 outline-none cursor-default"
            aria-label="Close"
          >
            <IoMdClose />
          </Popover.Close> */}
          {/* <Popover.Arrow /> */}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default MobilePopMenu;
