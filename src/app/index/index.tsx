import { View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Category } from '../../components/category'
import { styles } from "./styles";
import { categories } from '../../utils/categories';
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
        />

        <TouchableOpacity>
          <MaterialIcons
            name="add-circle-outline"
            size={24}
            color="#00B37E"
          />
        </TouchableOpacity>
      </View>
       <Category 
        name={categories[5].name}
        icon={categories[5].icon}
        isSelected 
      />
      
        <Category name= "Site" icon= "language" isSelected={false}/>
        <Category name="Video" icon= "movie" isSelected={false}/>
          
    </View>
  );
}
