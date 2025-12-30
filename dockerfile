# 1. Use Playwright’s ready-made image (Node + browsers included)
FROM mcr.microsoft.com/playwright:v1.56.1-jammy

# 2. Set the working folder inside the container
WORKDIR /app

# 3. Copy dependency files first
COPY package.json package-lock.json ./

# 4. Install npm dependencies
RUN npm ci

# 5. Copy the rest of your project files
COPY . .

# 6. Run Playwright tests on port 4000
EXPOSE 4000

# 7.A Run Playwright tests when container starts
# CMD ["npx", "playwright", "test"]

# 7.B Serve Playwright report on port 4000
CMD ["sh", "-c", "npx playwright test && npx playwright show-report --host=0.0.0.0 --port=4000"]
