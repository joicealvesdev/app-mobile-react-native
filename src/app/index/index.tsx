import { FlatList, Image, TouchableOpacity, View, Modal,Text } from 'react-native'
import { useState } from 'react'
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { Categories } from '../../components/category/categories'
import { Link } from '../../components/category/link'
import { colors } from '../../styles/colors'
import { Option } from '../../components/option'
import { router } from 'expo-router'

export default function Index() {
  const [open, setOpen] = useState(true)
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
        />

        <TouchableOpacity onPress={() => router.push("/add")}>
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
        renderItem={() => (
          <Link 
            name="Rocketseat"
            url="https://www.rocketseat.com.br/"
            onDetails={() => setOpen(true)}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      {/* MODAL */}
      <Modal transparent visible={false} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalcategory}>Cursos</Text>

              <TouchableOpacity onPress={() => setOpen(false)}>
                <MaterialIcons 
                  name="close" 
                  size={20} 
                  color={colors.gray[400]} 
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>Rocketseat</Text>
            <Text style={styles.modalUrl}>https://www.rocketseat.com.br/</Text>
             
              <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>


        </Modal>
    </View>
  )
}
