export const yourVoiceTheme = {
  colors: {
    // Primary Blue/Navy palette
    primary: '#2c3e50',        // Dark navy (headers, nav)
    primaryLight: '#34495e',   // Lighter navy
    primaryDark: '#1a252f',    // Darker navy

    // Accent blues
    accent: '#3498db',         // Bright blue (buttons, links)
    accentLight: '#5dade2',    // Light blue (hover states)
    accentDark: '#2980b9',     // Dark blue (active states)

    // Background
    background: '#1a1a2e',     // Deep blue-black
    backgroundLight: '#16213e', // Card backgrounds
    backgroundAlt: '#0f3460',  // Alternative sections

    // Status colors
    success: '#27ae60',
    successLight: '#2ecc71',
    warning: '#f39c12',
    error: '#e74c3c',
    errorLight: '#ff6b6b',

    // Text
    textPrimary: 'rgba(255, 255, 255, 0.95)',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    textMuted: 'rgba(255, 255, 255, 0.5)',
    textDark: '#1a1a1a',

    // Borders
    border: '#3498db33',
    borderLight: '#3498db22',
    borderAccent: '#3498db',
  },
  shadows: {
    card: '0 4px 20px rgba(52, 152, 219, 0.15)',
    button: '0 4px 15px rgba(52, 152, 219, 0.3)',
    modal: '0 10px 40px rgba(0, 0, 0, 0.5)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    accent: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
    card: 'linear-gradient(145deg, #16213e 0%, #0f3460 100%)',
    header: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)',
  }
};

export type YourVoiceTheme = typeof yourVoiceTheme;
