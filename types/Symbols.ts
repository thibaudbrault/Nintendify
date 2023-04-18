import { InjectionKey, Ref } from 'vue'
import { ITrack } from '~/types/trackTypes'

export const TrackKey = Symbol() as InjectionKey<Ref<ITrack>>
