# CyberGuard 🔐  
**Generative UI Powered Cybersecurity Assistant using Tambo React SDK**

---

## Overview

CyberGuard AI is a Generative UI powered cybersecurity assistant built using React and the Tambo React SDK. The system dynamically renders UI components based on user intent, demonstrating adaptive and intelligent interface behavior.

Instead of static navigation, CyberGuard AI allows users to type commands such as:

```
check password strength
check phishing url
check email phishing
open assistant
```

Tambo dynamically renders the appropriate component based on the user's intent.

---

## Tambo SDK Integration

CyberGuard AI uses the official **Tambo React SDK** to enable Generative UI.

Tambo is integrated using:

- `TamboProvider` for initializing Generative UI environment
- `withInteractable` to register UI components with Tambo
- Dynamic component rendering based on user commands

Example from project:

```javascript
import { TamboProvider } from "@tambo-ai/react";
import { withInteractable } from "@tambo-ai/react";
```

Components such as Password Analyzer, Phishing Detection, and AI Assistant are wrapped using Tambo interactables, allowing Tambo to manage dynamic rendering.

---

## Features

### Generative UI using Tambo
- Dynamic UI rendering based on natural language input
- Adaptive interface behavior
- Intent-based component selection

### URL Phishing Detection
- Detects suspicious URLs
- Provides risk level and recommendations

### Email Phishing Detection
- Analyzes email content for phishing patterns

### Password Strength Analyzer
- Evaluates password strength
- Categorizes passwords as Weak, Medium, or Strong

### AI Security Assistant
- Provides cybersecurity assistance

### Professional Dashboard UI
- Futuristic cybersecurity interface
- Responsive design
- Interactive sidebar navigation

---

## Tech Stack

- React.js
- Tambo React SDK
- JavaScript
- CSS
- React Router
- React Icons

---

## Project Structure

```
src/
├── pages/
├── tambo/
│   └── GenerativeUI.js
├── ai/
├── components/
├── styles/
```

---

## How to Run

Clone repository:

```
git clone https://github.com/2514-Aditi/CyberGuard.git
```

Install dependencies:

```
npm install
```

Run project:

```
npm start
```

Open:

```
http://localhost:3000
```

---

## Example Commands

Type these in dashboard:

```
check password strength
check phishing url
check email phishing
open assistant
```

Tambo dynamically renders appropriate components.

---

## Hackathon Submission

Hackathon: UI Strikes Back – Generative UI Hackathon  
Requirement: Use Tambo React SDK for Generative UI  

CyberGuard AI demonstrates real Generative UI using Tambo SDK.

---

## Author

Aditi Nadiger

GitHub:
https://github.com/2514-Aditi/CyberGuard

---

## License

Hackathon project for educational purposes.
