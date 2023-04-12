import { InjectionKey, Ref } from 'vue'
import { TTrack } from '~/types/TrackTypes'

export const TrackKey = Symbol() as InjectionKey<Ref<TTrack>>
