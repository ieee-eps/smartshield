from cortexutils.analyzer import Analyzer
import requests
import json

class SmartShieldAnalyzer(Analyzer):
    def __init__(self):
        Analyzer.__init__(self)
        self.url = self.get_param('config.url', None, 'URL parameter is missing')
        self.api_key = self.get_param('config.api_key', None, 'API key is missing')
        self.verify_ssl = self.get_param('config.verify_ssl', True)
        self.headers = {
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        }

    def run(self):
        super().run()
        data = self.get_data()  # Get data from TheHive

        payload = {
            'observable': self.get_observable(),
            'data': data
        }

        try:
            response = requests.post(
                self.url,
                headers=self.headers,
                json=payload,
                verify=self.verify_ssl
            )
            response.raise_for_status()
            result = response.json()
            self.report(result)
        except requests.exceptions.RequestException as e:
            self.error(f'Error connecting to SmartShield API: {str(e)}')

if __name__ == '__main__':
    SmartShieldAnalyzer().run()
