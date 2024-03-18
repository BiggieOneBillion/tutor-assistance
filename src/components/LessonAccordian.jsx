// import React from "react";
// import * as Accordion from "@radix-ui/react-accordion";

// const LessonAccordian = ({ data }) => {
//   return (
//     <Accordion.Root
//       className="bg-white w-[300px] lg:w-[800px] rounded-md shadow-[0_2px_10px] shadow-black/5"
//       type="single"
//       defaultValue="item-1"
//       collapsible
//     >
//       <Accordion.Item>
//         <Accordion.Header>
//           <h2>Variables</h2>
//           <Accordion.Trigger />
//         </Accordion.Header>
//         <Accordion.Content>
//           Yes. It's unstyled by default, giving you freedom over the look and
//           feel.
//         </Accordion.Content>
//       </Accordion.Item>
//     </Accordion.Root>
//   );
// };

// export default LessonAccordian;

import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { IoIosArrowRoundForward } from "react-icons/io";
import LessonDialog from "./LessonDialog";

const LessonAccordian = ({ data }) => (
  <Accordion.Root
    className="bg-transparent w-[300px]y md:w-full space-y-5 lg:w-full rounded-md shadow-[0_2px_10px]y shadow-black/5y"
    type="single"
    defaultValue="item-0"
    collapsible
  >
    {data.map((datum, i) => (
      <div key={i + 234567} className="">
        <AccordionItem value={`item-${i}`}>
          <AccordionTrigger>
            <p className="text-left">{datum.lessonName}</p>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {/* VIDEO LINK */}
              <div className="flex flex-col gap-2">
                <p className="text-base capitalize font-medium">
                  Please click on the link below 
                </p>
                <LessonDialog data={datum.video_url} />
              </div>
              {/* QUESTION  */}
              {datum.assignment !== undefined && (
                <div className="space-y-2">
                  <h3 className="text-base font-medium">Questions</h3>
                  <ul className="space-y-1">
                    {datum.assignment?.map((assign, i) => (
                      <li
                        key={i + 3456}
                        className="font-normal text-xs capitalize md:uppercase"
                      >
                        {assign}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="space-y-2">
                <h3 className="text-base font-medium">Useful Links</h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-xs">Mdn:</span>
                    <a
                      href={datum.Resources.mdnLink}
                      className="font-normal text-xs border border-black  cursor-pointer no-underline px-1"
                      target="_blank"
                      rel="noopener"
                    >
                      Link
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-xs">w3schools:</span>
                    <a
                      href={datum.Resources.w3school}
                      className="font-normal text-xs border border-black  cursor-pointer no-underline px-1"
                      target="_blank"
                      rel="noopener"
                    >
                      Link
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-xs">JavascriptInfo:</span>
                    <a
                      href={datum.Resources.jsInfo}
                      className="font-normal text-xs border border-black  cursor-pointer no-underline px-1"
                      target="_blank"
                      rel="noopener"
                    >
                      Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </div>
    ))}
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "focus-within:shadow-mauve12 bg-gray-100 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-violet11 font-medium  text-base  text-[rgba(0,0,0,0.5)] bg-gray-200 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] lg:h-[80px] flex-1 cursor-default items-center justify-between  px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

export default LessonAccordian;
