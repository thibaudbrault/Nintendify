import { InjectionKey, Ref } from 'vue'
import { ITrack } from '~/types/TrackTypes'

export const TrackKey = Symbol() as InjectionKey<Ref<ITrack>>
