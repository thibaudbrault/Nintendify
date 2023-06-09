export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      albums: {
        Row: {
          console_id: number | null
          created_at: string | null
          id: number
          image: string
          license_id: number | null
          name: string
          year: number | null
        }
        Insert: {
          console_id?: number | null
          created_at?: string | null
          id?: number
          image?: string
          license_id?: number | null
          name: string
          year?: number | null
        }
        Update: {
          console_id?: number | null
          created_at?: string | null
          id?: number
          image?: string
          license_id?: number | null
          name?: string
          year?: number | null
        }
      }
      consoles: {
        Row: {
          created_at: string | null
          fullName: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          fullName?: string
          id?: number
          name?: string
        }
        Update: {
          created_at?: string | null
          fullName?: string
          id?: number
          name?: string
        }
      }
      license: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
      }
      musics: {
        Row: {
          album_id: number | null
          created_at: string | null
          id: number
          link: string
          title: string
        }
        Insert: {
          album_id?: number | null
          created_at?: string | null
          id?: number
          link: string
          title: string
        }
        Update: {
          album_id?: number | null
          created_at?: string | null
          id?: number
          link?: string
          title?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
