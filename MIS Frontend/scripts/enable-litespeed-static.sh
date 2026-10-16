#!/bin/bash
# Serve images and video from the public folder on disk.
# Remove the MIS_STATIC_MEDIA block from .htaccess if a media file starts 404ing.
set -eu

APP="${1:-$HOME/mis-app/mis-frontend}"
HTACCESS="$APP/.htaccess"
MARK="MIS_STATIC_MEDIA"

if [ ! -d "$APP/public" ]; then
  echo "public folder not found: $APP/public"
  exit 1
fi

touch "$HTACCESS"
if grep -q "$MARK" "$HTACCESS"; then
  echo "Static media rules are already in $HTACCESS"
  exit 0
fi

cat >> "$HTACCESS" << 'RULES'

# MIS_STATIC_MEDIA
# LiteSpeed serves these files itself. Node still handles pages and APIs.
# Delete this block to send media through Node again.
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{REQUEST_URI} \.(png|jpe?g|gif|webp|svg|ico|mp4|webm)$ [NC]
RewriteCond %{DOCUMENT_ROOT}/public%{REQUEST_URI} -f
RewriteRule ^.*$ public%{REQUEST_URI} [L]
</IfModule>
<IfModule mod_headers.c>
<FilesMatch "\.(png|jpe?g|gif|webp|svg|ico|mp4|webm)$">
  Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
</IfModule>
# END MIS_STATIC_MEDIA
RULES

echo "Added static media rules to $HTACCESS"
