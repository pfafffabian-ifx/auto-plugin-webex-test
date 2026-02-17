const npmOptions = {
	exact: true,
};

module.exports = function rc() {
	return {
  "plugins": [
    ["npm", npmOptions],
    [ "auto-plugin-webex", {
        "threshold": "patch",
        "message": "# VERSION UPDATE\n\nA new version has been released: [%version](%link).\n\n## Changelog\n\n%notes"
      } 
  ]
  ],
  "owner": "pfafffabian-ifx",
  "repo": "auto-plugin-webex-test",
  "name": "Fabian Pfaff",
  "email": "fabian.pfaff@infineon.com"
}};
