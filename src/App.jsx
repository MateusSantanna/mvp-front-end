import MainMenu from "./pages/MainMenu/script";
import { useState } from "react";

function App() {
  const [options, setOptions] = useState("Menu");
  const [events, setEvents] = useState([
    {
      title: "Trilha Saquarema",
      date: "24/07/2025",
      time: "15:00",
      id: 0,
      location: "Saquarema",
      activityType: "Caminhada",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/10/40/c3/dd/passeio-trilha-para-a.jpg",
      description: "Trilha com os Jovens em Saquarema",
      status: "Pendente",
    },

    {
      title: "Trilha de Jacarépiá",
      date: "29/06/2025",
      time: "12:00",
      id: 1,
      location: "Saquarema",
      activityType: "Passeio",
      image:
        "https://s0.wklcdn.com/image_103/3092605/29248979/18683046Master.jpg",
      description: "Trilha com os Jovens em Saquarema",
      status: "Finalizado",
    },
  ]);
  const [userList, setUserList] = useState({
    name: "admin",
    password: "admin",
  });
  const [adminStatus, setAdminStatus] = useState(false);

  return (
    <>
      <MainMenu
        options={options}
        setOptions={setOptions}
        events={events}
        setEvents={setEvents}
        userList={userList}
        setUserList={setUserList}
        adminStatus={adminStatus}
        setAdminStatus={setAdminStatus}
      />
    </>
  );
}

export default App;
