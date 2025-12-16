import { Alert, FlatList, Image, TouchableOpacity, View, Modal, Text } from "react-native"
import { useEffect, useState } from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { Categories } from "../../components/category/categories"
import { Link } from "../../components/category/link"
import { colors } from "../../styles/colors"
import { Option } from "../../components/option"
import { router } from "expo-router"
import { categories } from "../../utils/categories"
import { linkStorage, LinkStorage } from "../../storage/link-storage"

export default function Index() {
  const [links, setLinks] = useState<LinkStorage[]>([])
  const [category, setCategory] = useState(categories[0].name)
  const [open, setOpen] = useState(false)
  const [selectedLink, setSelectedLink] = useState<LinkStorage | null>(null)
 
  
  async function getLinks() {
    try {
      const response = await linkStorage.get()
      setLinks(response.filter(item => item.category === category))
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar os links")
    }
  }
  async function linkRemove() {
    try {
      await linkStorage.remove(selectedLink)
      getLinks()
      setShowModal(false)
    } catch (error) {
      Alert.alert("Erro", "Não foi possível excluir")
      console.log(error);    
    }
  }

  async function handleRemove() {
    Alert.alert("Excluir", "Deseja realmente excluir?", [
      { style: "cancel", text: "Não" },
      { text: "Sim", onPress: linkRemove },
    ])
  }


  useEffect(() => {
    getLinks()
  }, [category])

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

      <Categories selected={category} onChange={setCategory} />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => {
              setSelectedLink(item)
              setOpen(true)
            }}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      {/* MODAL */}
      <Modal transparent visible={open} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalcategory}>
                {selectedLink?.category}
              </Text>

              <TouchableOpacity onPress={() => setOpen(false)}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>{selectedLink?.name}</Text>
            <Text style={styles.modalUrl}>{selectedLink?.url}</Text>

            <View style={styles.modalFooter}>
            <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemove} />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
