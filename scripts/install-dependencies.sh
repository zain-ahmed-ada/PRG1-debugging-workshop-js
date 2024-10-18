npm install
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" && chsh -s $(which zsh)
curl -fsSL https://bun.sh/install | bash && echo export BUN_INSTALL="$HOME/.bun" >> "$HOME/.zshrc" && echo export PATH="$BUN_INSTALL/bin:$PATH" >> "$HOME/.zshrc"