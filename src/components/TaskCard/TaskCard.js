import Image from "next/image";
import Icon from "../Icon";

function TaskCard({ TaskData }) {
  return (
    <div className="flex flex-col gap-5 xsm-400:gap-2">
      {TaskData.map((eachTask) => {
        const { img, title, task, height, width } = eachTask;
        return (
           <div
           key={title}
           className="border flex-wrap xsm-400:flex-nowrap hover:bg-custom-translucent-white-12 border-custom-translucent-white-05 bg-custom-translucent-white-05 flex p-2 gap-4 rounded-xl"
         >
           <div className="w-fit xsm-400:h-[80px] xsm-400:w-[120px] shrink-0 rounded-lg overflow-hidden">
             <Image
               src={img}
               alt={title}
               height={height}
               width={width}
               className="w-full h-full object-cover"
             />
           </div>
           
            <BigCard title={title} task={task}/>
            <SmallCard title={title} task={task}/>
          </div>
        );
      })}
    </div>
  );
}

export default TaskCard;


function BigCard({title,task}){
  return(
    <>
    <div className="hidden xsm-400:flex flex-col flex-1 justify-between overflow-hidden">
              <p className="text-xl whitespace-nowrap overflow-hidden text-ellipsis max-w-[260px]">
                {title}
              </p>
              <div className="dash-gradient h-[1px]"></div>
              <div className="flex gap-2 items-center">
                <p className="whitespace-nowrap text-custom-translucent-white-6">
                  {task}
                </p>
                <div className="prograssbar-wrapper">
                  <div className="prograssbar"></div>
                </div>
              </div>
            </div>
            <div className="hidden xsm-400:flex h-6 w-6 rounded-full p-1 self-end justify-center items-center bg-custom-translucent-white-05 border border-custom-translucent-white-1 backdrop-blur-[10px] text-custom-gray-50">
              <Icon id={"check"} size={14} />
            </div>
           </> 
  )
}
function SmallCard({title,task}){
  return(
    <>
    <div className="flex gap-3 xsm-400:hidden flex-col flex-1 justify-between overflow-hidden">
              <p className="text-xl">
                {title}
              </p>
              <div className="dash-gradient h-[1px]"></div>
              <div className="flex gap-2 items-center">
                <p className="whitespace-nowrap text-custom-translucent-white-6">
                  {task}
                </p>
                <div className="prograssbar-wrapper">
                  <div className="prograssbar"></div>
                </div>
            <div className="h-6 w-6 rounded-full p-1 flex justify-center items-center bg-custom-translucent-white-05 border border-custom-translucent-white-1 backdrop-blur-[10px] text-custom-gray-50">
              <Icon id={"check"} size={14} />
            </div>
              </div>
            </div>
           </> 
  )
}