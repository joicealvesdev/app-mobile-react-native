import AsyncStorage from "@react-native-async-storage/async-storage"

const LINKS_STORAGE_KEY = "links-storage"

export type LinkStorage = {
  id: string
  name: string
  url: string
  category: string
}

async function get(): Promise<LinkStorage[]> {
  const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY)
  return storage ? JSON.parse(storage) : []
}

async function save(newLink: LinkStorage) {
  const storage = await get()
  const updated = [...storage, newLink]

  await AsyncStorage.setItem(
    LINKS_STORAGE_KEY,
    JSON.stringify(updated)
  )
}

async function remove(id: string) {
  const storage = await get()
  const updated = storage.filter(link => link.id !== id)

  await AsyncStorage.setItem(
    LINKS_STORAGE_KEY,
    JSON.stringify(updated)
  )
}

export const linkStorage = { get, save, remove }
