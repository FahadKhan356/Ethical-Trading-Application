// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { DraxProvider, DraxView } from 'react-native-drax';

// const DragBoxesScreen = () => {
//   const [boxes, setBoxes] = useState([
//     { id: 'box1', title: 'Box 1', items: ['A', 'B'] },
//     { id: 'box2', title: 'Box 2', items: ['C'] },
//     { id: 'box3', title: 'Box 3', items: [] },
//   ]);

//   const moveItem = (item: string, fromBoxId: string, toBoxId: string) => {
//     setBoxes(prev =>
//       prev.map(box => {
//         if (box.id === fromBoxId) {
//           return {
//             ...box,
//             items: box.items.filter(i => i !== item),
//           };
//         }
//         if (box.id === toBoxId) {
//           return {
//             ...box,
//             items: [...box.items, item],
//           };
//         }
//         return box;
//       }),
//     );
//   };

//   return (
//     <DraxProvider>
//       <View style={styles.container}>
//         {boxes.map(box => (
//           <DraxView
//             key={box.id}
//             receptive
//             style={styles.box}
//             onReceiveDragDrop={({ dragged }) => {
//               moveItem(
//                 dragged.payload.item,
//                 dragged.payload.fromBoxId,
//                 box.id,
//               );
//             }}
//           >
//             <Text style={styles.boxTitle}>{box.title}</Text>

//             {box.items.map(item => (
//               <DraxView
//                 key={item}
//                 draggable
//                 payload={{ item, fromBoxId: box.id }}
//                 style={styles.item}
//               >
//                 <Text style={styles.itemText}>{item}</Text>
//               </DraxView>
//             ))}
//           </DraxView>
//         ))}
//       </View>
//     </DraxProvider>
//   );
// };

// export default DragBoxesScreen;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//   },
//   box: {
//     flex: 1,
//     margin: 8,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     borderWidth: 2,
//     borderColor: '#ddd',
//   },
//   boxTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   item: {
//     padding: 12,
//     marginVertical: 6,
//     borderRadius: 8,
//     backgroundColor: '#4CAF50',
//   },
//   itemText: {
//     color: '#fff',
//     fontWeight: '600',
//     textAlign: 'center',
//   },
// });
