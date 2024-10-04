import { Copy, X } from "lucide-react";
import { useState } from "react";
import { NotificationToast } from "@/common/notificationToast";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import toast, { useToasterStore } from "react-hot-toast";

export default function Summary() {
  const { toasts } = useToasterStore();
  const wait = () => new Promise((resolve) => setTimeout(resolve, 2000));
  const loading = toasts.some((t) => t.type === "loading");
  const handleGenerateSummary = async () => {
    toast.promise(wait(), {
      loading: "Generating summary...",
      success: "Summary generated successfully",
      error: "Error generating summary",
    });
  };
  return (
    <>
      <div className=" flex justify-between items-center">
        <h2 className="text-base font-bold">Summary</h2>
        <Button variant="ghost" size="icon">
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex">
        <Button
          onClick={() => handleGenerateSummary()}
          className="bg-blue-500 rounded-none w-[85%]"
          disabled={loading}
        >
          {loading ? "Loading..." : "Generate summary"}
        </Button>
        <Button
          disabled={loading}
          className="rounded-none bg-sky-100 w-[15%]"
          variant="link"
          size="icon"
        >
          <Copy className="size-4 text-blue-500" />
        </Button>
      </div>
      <p className="text-xs text-gray-500">
        Any information generated from AI may not be absolutely accurate.
      </p>
      <ScrollArea className="h-[32rem] p-2 border">
        <div className="space-y-4 text-sm">
          <p>
            Chiến dịch Điện Biên Phủ là một trong những trận đánh quan trọng
            nhất trong lịch sử Việt Nam, diễn ra vào năm 1954. Dưới đây là các
            điểm chính về chiến dịch này:
          </p>
          <div>
            <h3 className="font-bold">Thời gian:</h3>
            <p>Từ ngày 13 tháng 3 đến ngày 7 tháng 5 năm 1954.</p>
          </div>
          <div>
            <h3 className="font-bold">Địa điểm:</h3>
            <p>Thung lũng Điện Biên Phủ, Tây Bắc Việt Nam.</p>
          </div>
          <div>
            <h3 className="font-bold">Các bên tham gia:</h3>
            <p>Quân đội Nhân dân Việt Nam (Việt Minh) và Quân đội Pháp.</p>
          </div>
          <div>
            <h3 className="font-bold">Lãnh đạo:</h3>
            <ul className="list-disc list-inside">
              <li>Việt Minh: Đại tướng Võ Nguyên Giáp chỉ huy.</li>
              <li>Pháp: Tướng Christian de Castries chỉ huy.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Mục tiêu:</h3>
            <p>
              Việt Minh nhằm tiêu diệt cụm cứ điểm phòng ngự mạnh của quân Pháp
              tại Điện Biên Phủ để kết thúc chiến tranh Đông Dương.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Diễn biến:</h3>
            <ul className="list-disc list-inside">
              <li>
                Việt Minh bao vây và tấn công các cứ điểm của Pháp tại Điện Biên
                Phủ.
              </li>
              <li>
                Sử dụng chiến thuật bao vây, tấn công liên tục và hệ thống hầm
                hào để tiếp cận các cứ điểm.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Kết quả:</h3>
            <ul className="list-disc list-inside">
              <li>
                Chiến thắng thuộc về Việt Minh, đánh bại hoàn toàn quân Pháp tại
                Điện Biên Phủ.
              </li>
              <li>
                Kết quả này dẫn đến việc Pháp phải ký Hiệp định Genève năm 1954,
                chia đôi Việt Nam và rút khỏi Đông Dương.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Tầm quan trọng:</h3>
            <ul className="list-disc list-inside">
              <li>
                Đánh dấu sự kết thúc của cuộc chiến tranh Đông Dương lần thứ
                nhất.
              </li>
              <li>Khẳng định sức mạnh và chiến thuật quân sự của Việt Minh.</li>
            </ul>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
