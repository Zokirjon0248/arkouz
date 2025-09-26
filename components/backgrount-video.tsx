"use client"
import React from "react"

export const BackgroundVideo = React.memo(() => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src="/architecture.mp4" type="video/mp4" />
      </video>
    </div>
  )
})

BackgroundVideo.displayName = "BackgroundVideo"
