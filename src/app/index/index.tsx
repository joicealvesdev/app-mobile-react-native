import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import { Category } from '../../components/category'
import { styles } from "./styles";
import { categories } from '../../utils/categories';
import { Categories } from '../../components/category/categories'
import { Link } from '../../components/category/link'
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
       <Categories />
         <FlatList 
        data={["1", "2", "3"]}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Link 
            name='Rocketseat'
            url='https://www.rocketseat.com.br/'
            onDetails={() => console.log('Clicou!')}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
