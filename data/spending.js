import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default [
  {
    id: 1,
    name: "Spotify",
    amount: "900.75",
    date: "2024-05-01",
    icon: <Entypo name="spotify" size={24} color="#1DB954" />
  },
  {
    id: 2,
    name: "Amazon",
    amount: "25,000.5",
    date: "2024-05-01",
    icon: <FontAwesome name="amazon" size={24} color="#FF9900" />
  },
  {
    id: 3,
    name: "Netflix",
    amount: "4,400.75",
    date: "2024-05-01",
    icon: <MaterialCommunityIcons name="netflix" size={24} color="#E50914" />
  },
  {
    id: 4,
    name: "Twitter",
    amount: "1,200.45",
    date: "2024-05-01",
    icon: <AntDesign name="twitter" size={24} color="#1DA1F2" />
  },
  {
    id: 5,
    name: "Restaurants",
    amount: "55,850.25",
    date: "2024-05-01",
    icon: <Ionicons name="fast-food-outline" size={24} color="yellow" />
  }
]