#!/bin/bash
ng build --configuration production --base-href "https://gilaniadill.github.io/PointOfSale-Angular/"
npx angular-cli-ghpages --dir=dist/PointOfSale-Angular --force
echo "Deployed successfully!"