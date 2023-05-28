/** @format */
import { useDispatch } from "react-redux";
import * as apis from "../apis";
import { GET_QUESTIONS } from "../redux/actions";
const DeleteModal = ({ method1, method2, id }) => {
  const dispatch = useDispatch();
  const handelClose = () => {
    method1(false);
  };
  const handleDelete = () => {
    console.log(id);
    alert("Xóa thành công!");
    method1(false);
    method2(false);
    const deleteQuestion = async (id) => {
      const response = await apis.deleteQuestion(id);
      console.log(response);
      window.location.reload();
    };
    deleteQuestion(id);
  };
  return (
    <div className="w-screen h-screen flex fixed">
      <div className="w-[300px] bg-black p-[20px] m-auto">
        <h1 className="text-white text-[20px]">
          Bạn có chắc chắn muốn xóa câu hỏi này?
        </h1>
        <div className="mt-4 flex gap-5">
          <div
            onClick={handleDelete}
            className="bg-white text-black p-[10px] rounded-md cursor-pointer"
          >
            Có
          </div>
          <div
            onClick={handelClose}
            className="bg-white text-black p-[10px] rounded-md cursor-pointer"
          >
            Không
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
