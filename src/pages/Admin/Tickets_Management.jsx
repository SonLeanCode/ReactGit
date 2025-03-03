import { useState } from "react";
import { Button, Input } from "react-daisyui";
import { useGetTicketsQuery } from "../../services/Ticket/ticket.serviecs";
import { FaTrash } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import Pagination from "../../components/Admin/Pagination";
import LoadingLocal from "../Loading/LoadingLocal";
import LoadingPage from "../Loading/LoadingSpinner";
import avatar_defaut from "../../assets/img/avatar_defaut/avatar_default.png";

const Tickets_Management = () => {
  const { data: tickets, isLoading: ticketsDataLoading } = useGetTicketsQuery();
  const [selectedtickets, setSelectedtickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketssPerPage, setticketssPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle case where tickets.data is undefined
  const filteredtickets = tickets?.allTickets
    ? tickets.allTickets.filter((ticket) =>
        ticket?.name_movie?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];
  console.log(filteredtickets);

  const totalPages = Math.ceil(filteredtickets.length / ticketssPerPage);

  const handleticketssPerPageChange = (e) => {
    setticketssPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleticketsSelect = (id) => {
    setSelectedtickets((prev) =>
      prev.includes(id)
        ? prev.filter((ticketId) => ticketId !== id)
        : [...prev, id],
    );
  };

  const paginatedtickets = filteredtickets
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice((currentPage - 1) * ticketssPerPage, currentPage * ticketssPerPage);

  if (ticketsDataLoading) {
    return <LoadingLocal />;
  }
  if (ticketsDataLoading) {
    return <LoadingPage loading={ticketsDataLoading} />;
  }

  return (
    <div className="ml-64 mt-8 bg-[#111111] p-6 text-white">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-bold">Quản lý danh sách vé</h3>
        {/* <Button
          className="flex rounded-md bg-red-600 p-2 hover:bg-red-700 hover:brightness-125"
          onClick={() => setIsModalVisible(true)}
        >
          + Thêm vé
        </Button> */}
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <label htmlFor="entries" className="mr-2 text-gray-400">
            Hiển thị
          </label>
          <select
            id="entries"
            className="rounded-md bg-[#2d2d2d] p-2 text-white"
            value={ticketssPerPage}
            onChange={handleticketssPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <span className="mx-2 text-gray-400">mục</span>
          {selectedtickets.length > 0 && (
            <div className="mx-2 flex items-center">
              <p className="mr-4 text-lg font-semibold">
                {`' `}Đã chọn {selectedtickets.length} mục{` '`}
              </p>
              <Button className="rounded-md bg-blue-500 p-2 hover:bg-blue-600">
                <FaTrash />
              </Button>
            </div>
          )}
        </div>

        <div className="flex items-center">
          <h2>Tìm kiếm:</h2>
          <AiOutlineSearch className="relative left-[12.5rem] size-5" />
          <Input
            type="text"
            placeholder="Search..."
            className="rounded-md bg-[#2d2d2d] p-1 text-white"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="rounded-lg shadow-lg">
        <table className="w-full border-separate border-spacing-y-2 border-[#111111]">
          <thead className="bg-[#2d2d2d]">
            <tr>
              <th className="px-4 py-3 text-left text-white">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedtickets(
                      e.target.checked
                        ? paginatedtickets.map((ticket) => ticket._id)
                        : [],
                    )
                  }
                  checked={
                    paginatedtickets?.length > 0 &&
                    selectedtickets.length === paginatedtickets.length
                  }
                  className="ml-4 cursor-pointer appearance-none rounded bg-[#111111] checked:bg-blue-500"
                />
              </th>
              <th className="px-4 py-3 text-left text-white">Người dùng</th>
              <th className="px-4 py-3 text-left text-white">Tên phim</th>
              <th className="px-4 py-3 text-left text-white">Địa chỉ</th>
              <th className="px-4 py-3 text-left text-white">Ghế</th>
              <th className="px-4 py-3 text-left text-white">Giờ chiếu</th>
              <th className="px-4 py-3 text-left text-white">Tổng tiền</th>
              <th className="px-4 py-3 text-center text-white">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="bg-black text-gray-400">
            {paginatedtickets.map((ticket) => (
              <tr key={ticket._id}>
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedtickets.includes(ticket._id)}
                    onChange={() => handleticketsSelect(ticket._id)}
                    className="ml-4 cursor-pointer appearance-none rounded bg-[#111111] checked:bg-blue-500"
                  />
                </td>
                <td className="px-4 py-2">
                  <img
                    src={ticket?.user_id?.avatar || avatar_defaut}
                    alt="Avatar"
                    className="mr-2 h-8 w-8 rounded-full"
                  />
                  <p>{ticket?.user_id?.email}</p>
                </td>
                <td className="px-4 py-2">{ticket.name_movie}</td>
                <td className="px-4 py-2">{ticket.address_cinema}</td>
                <td className="px-4 py-2">{ticket.seat_number}</td>
                <td className="px-4 py-2">{ticket.showtime}</td>
                <td className="px-4 py-2">
                  {ticket.price.toLocaleString()} VNĐ
                </td>
                <td className="px-4 py-2 text-center font-bold text-[#36f350]">
                  Đã thanh toán
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Tickets_Management;
