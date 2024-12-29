import React from "react";
import RoomsFilter from "./RoomsFilter";
import Roomslist from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

 function RoomsContainer({context}) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
    
  }
        return (
          <>
            <RoomsFilter rooms={rooms}></RoomsFilter>
            <Roomslist rooms={sortedRooms}></Roomslist>
          </>
        );
      }

 export default withRoomConsumer (RoomsContainer);     
    
    

// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import Roomslist from "./RoomsList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }

//         return (
//           <div>
//             hello from roomscontainer
//             <Roomslist rooms={sortedRooms}></Roomslist>
//             <RoomsFilter rooms={rooms}></RoomsFilter>
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
