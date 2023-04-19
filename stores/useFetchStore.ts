import { defineStore } from 'pinia'
import { Database } from '~/types/schema'

export const useFetchStore = defineStore('fetch', () => {
  const client = useSupabaseClient<Database>()
  const musicsRef = ref(null)
  const albums = ref(null)
  const album = ref(null)
  const fetchMusics = async () => {
    const { data: musics, error } = await client
      .from('musics')
      .select('*, albums(image, name)')
      .order('id')
    musicsRef.value = musics
    return musics
  }
  const fetchAlbum = async (title: string) => {
    const { data: album, error } = await client
      .from('albums')
      .select('*, musics(*), license(name), consoles(name, fullName)')
      .eq('name', title)
      .order('id', { foreignTable: 'musics' })
      .limit(1)
      .single()
    album.value = album
  }
  return { musics, fetchMusics }
})

// const { data: album, pending } = await useAsyncData(
//     'album',
//     async () =>
//       client
//         .from('albums')
//         .select('*, musics(*), license(name), consoles(name, fullName)')
//         .eq('name', title)
//         .order('id', { foreignTable: 'musics' })
//         .limit(1)
//         .single(),
//     {
//       transform: (result) => result.data,
//     }
//   )
