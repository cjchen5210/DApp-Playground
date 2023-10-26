import { useState, useEffect, useCallback } from 'react'
import { useTheme } from 'next-themes'
import { Toggle } from '@web3uikit/core';
import { useCall } from '@usedapp/core';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleOnChange = useCallback(() => {  
    setTheme(theme === "dark" ? "light" : "dark");  
  }, [theme, setTheme]);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      {/* <select value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select> */}
      <Toggle customize={{
        color: '#F97316',
        fontSize: '20px',
      }}
      id="test-toggle"
      labelOff="Light"
      labelOn="Dark"
      onChange={handleOnChange}
      />
    </div>
    
  )
}

export default ThemeSwitch