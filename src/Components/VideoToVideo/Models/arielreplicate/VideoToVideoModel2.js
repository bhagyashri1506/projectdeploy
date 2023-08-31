import React from "react";
import { GoRocket } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const VideoToVideoModel2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <a
        class="no-underline flex flex-col "
        onClick={() => {
          navigate("/collect/videotovideo2result/demo");
        }}
        style={{ cursor: "pointer" }}
      >
        <div class="h-80 mb-2">
          <div class=" h-full w-full overflow-hidden">
            <img
              alt=""
              class="object-cover object-center w-full h-full"
              src={require("./model-2.gif")}
            />
          </div>
        </div>
        <div>
          <div class="flex">
            <h4 class="flex-shrink overflow-hidden overflow-ellipsis text-h4">
              <span class="text-[#00000073]">arielreplicate</span>
              <span class="text-[#00000073] px-1">/</span>robust_video_matting
            </h4>
          </div>

          <p class="mb-1 font-sans">extract foreground of a video</p>
          <div class="text-[#00000073] text-sm">
            <span class="float-right flex">
              <i className="icon">
                <GoRocket />
              </i>
              16.8K runs
            </span>
          </div>
        </div>
      </a>
    </>
  );
};

export default VideoToVideoModel2;
