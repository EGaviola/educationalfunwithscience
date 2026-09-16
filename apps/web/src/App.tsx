import { useEffect, useMemo, useState } from 'react'
import './App.css'
import GamePortal, { type GameMode } from './GamePortal'
import EscapeRoomGame from './EscapeRoomGame'
import ResearchMissionGame from './ResearchMissionGame'
import MiniGamePlay from './MiniGamePlay'
import ScenarioGame from './ScenarioGame'
import { fallbackLabs, fallbackMissions } from './fallbackContent'

const API_BASE = (() => {
  const configured = import.meta.env.VITE_API_BASE?.trim()
  if (configured) {
    return configured.replace(/\/$/, '')
  }

  return import.meta.env.DEV ? '' : window.location.origin
})()

// The rest of the file is unchanged.
