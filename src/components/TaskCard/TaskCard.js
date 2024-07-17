import Image from "next/image";
import Icon from "../Icon";

function TaskCard({ TaskData }) {
  return (
    <div className="flex flex-col gap-2">
      {TaskData.map((eachTask) => {
        const { img, title, task, height, width } = eachTask;
        return (
          <div
            key={title}
            className="border hover:bg-custom-translucent-white-12 border-custom-translucent-white-05 bg-custom-translucent-white-05 flex p-2 gap-4 rounded-xl"
          >
            <div className="h-[80px] w-[120px] shrink-0 rounded-lg overflow-hidden">
              <Image
                src={img}
                alt={title}
                height={height}
                width={width}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 justify-between overflow-hidden">
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
            <div className="h-6 w-6 rounded-full p-1 self-end flex justify-center items-center bg-custom-translucent-white-05 border border-custom-translucent-white-1 backdrop-blur-[10px] text-custom-gray-50">
              <Icon id={"check"} size={14} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TaskCard;
