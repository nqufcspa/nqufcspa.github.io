Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DERCA] 71 Atualizar dados cadastrais de discente da graduação","publishDate":"15/10/2021 12:08:55","pages":[{"id":"8a4c0eea-1cdb-470b-936f-0b0d9f3e6386","name":"[DERCA] 71 Atualizar dados cadastrais de discente da graduação","version":"1.0","author":"rene","image":"files\\diagrams\\DERCA]_71_Atualizar_dados_cadastrais_de_discente_da_graduacao.png","isSubprocessPage":false,"elements":[{"id":"01489ed8-34c3-4faa-807f-bab0b367f8d5","name":"[DERCA] 71 Atualizar dados cadastrais de discente da graduação","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2038.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"837f6604-ac6e-47e7-9699-b2a0cd686df3","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":149.0,"y":160.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"4e634196-a4ea-465d-95d4-3cc49bfba6c1","name":"Abrir processo de atualização/ correção de dados cadastrais - alunos da graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":245.0,"y":136.5}],"radius":0.0,"height":79.0,"width":128.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c370749c-5533-4ff5-a66a-914c337b5676","name":"Incluir documento 972 - Formulário de alteração de dados graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":428.0,"y":132.0}],"radius":0.0,"height":86.0,"width":181.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"282d659f-36bf-4560-9912-20d4199fe7d4","name":"Anexar em PDF documentos que comprovem a correção dos dados cadastrais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":665.0,"y":134.0}],"radius":0.0,"height":82.0,"width":123.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e0e7ec54-55cd-4f9c-81b0-0e18e890662a","name":"Liberar acesso externo para o aluno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":679.0,"y":536.0}],"radius":0.0,"height":63.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e0c82490-71b7-4a64-8119-0a6cb2ceb7a7","name":"Analisar documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":681.0,"y":643.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"33ccefd7-29c9-489e-8c49-84505a87aa4e","name":"Alterar nível de acesso do processo para Restrito","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":678.5,"y":733.0}],"radius":0.0,"height":69.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a85f144a-cf16-440e-b520-d7255defc7ac","name":"Há dúvidas ou dificuldades de leitura em relação aos documentos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":706.0,"y":863.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"b51d68a1-d2c6-46fe-9b90-f6889a250345","name":"Incluir documento 872 - Despacho Simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":190.5,"y":846.5}],"radius":0.0,"height":75.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"85651f51-6b5a-4a91-afe0-95130e896974","name":"Resolver problemas encontrados com a documentação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":191.0,"y":358.0}],"radius":0.0,"height":60.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4a564b7f-dc2c-4e22-8ab0-923dbff8f203","name":"Anexar em PDF documentos com problemas resolvidos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":423.0,"y":344.0}],"radius":0.0,"height":89.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a6dcb52d-9bc4-4779-9627-f7517600910b","name":"Atualizar SIE com dados conforme documentos anexados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":662.0,"y":953.0}],"radius":0.0,"height":81.0,"width":129.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5ce940f6-dc89-419c-9745-ee5f7231d827","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":672.0,"y":1066.0}],"radius":0.0,"height":72.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a9717e87-342f-4dad-82d2-9269852c8846","name":"Comunicar ao aluno  sobre a atualização dos dados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":661.0,"y":1188.0}],"radius":0.0,"height":60.0,"width":131.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e085e5ca-5b50-4a0f-beb9-b75eafeeea65","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":706.5,"y":1291.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"92df4cac-0899-4919-8c0d-7dce34400659","name":"Atualizar dados do aluno nos sistemas do NTI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":450.0,"y":1686.0}],"radius":0.0,"height":60.0,"width":205.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6937438b-d5cf-46e7-822c-6d1d5945f6fd","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":479.5,"y":1779.0}],"radius":0.0,"height":60.0,"width":146.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b216544c-f8fb-4e21-8b15-771ca4b5c0f5","name":"Atualizar os dados do aluno na plataforma SEI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":772.5,"y":1424.0}],"radius":0.0,"height":60.0,"width":205.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f4b71ec0-76bf-43dd-ac2a-df841a3eba24","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":802.0,"y":1535.0}],"radius":0.0,"height":60.0,"width":144.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9fbf4537-a36e-4419-a15f-fd46d12fc00a","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":854.0,"y":1948.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"898a9a70-8a25-4fb3-977e-4695bb7f8f30","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":986.0,"y":1938.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"c1519242-a482-4de4-bf2c-e5e8c65f2245","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1131.0,"y":1953.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"88f3d118-838d-4724-b5e3-005f63f22648","name":"Aluno","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":482.9,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"86d7b4c5-2bab-4d61-9a45-e452feec7e90","name":"DISEC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":502.9}],"radius":0.0,"height":862.1,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f72a6565-b582-4aab-8540-b10a00411a66","name":"CGSEI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1365.0}],"radius":0.0,"height":277.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d17b851a-8ef5-4974-9c21-cbc459a23b00","name":"NTI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1642.0}],"radius":0.0,"height":241.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"58f3d2dd-c268-4b0a-9031-218efe79d084","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1883.0}],"radius":0.0,"height":175.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"8a4c0eea-1cdb-470b-936f-0b0d9f3e6386","containerName":"[DERCA] 71 Atualizar dados cadastrais de discente da graduação","isSubprocess":false,"elements":[{"id":"01489ed8-34c3-4faa-807f-bab0b367f8d5","value":"[DERCA] 71 Atualizar dados cadastrais de discente da graduação"},{"id":"88f3d118-838d-4724-b5e3-005f63f22648","value":"Aluno"},{"id":"86d7b4c5-2bab-4d61-9a45-e452feec7e90","value":"DISEC"},{"id":"f72a6565-b582-4aab-8540-b10a00411a66","value":"CGSEI"},{"id":"d17b851a-8ef5-4974-9c21-cbc459a23b00","value":"NTI"},{"id":"58f3d2dd-c268-4b0a-9031-218efe79d084","value":"DIARQ"},{"id":"837f6604-ac6e-47e7-9699-b2a0cd686df3","value":""},{"id":"4e634196-a4ea-465d-95d4-3cc49bfba6c1","value":"Abrir processo de atualização/ correção de dados cadastrais - alunos da graduação"},{"id":"c370749c-5533-4ff5-a66a-914c337b5676","value":"Incluir documento 972 - Formulário de alteração de dados graduação"},{"id":"282d659f-36bf-4560-9912-20d4199fe7d4","value":"Anexar em PDF documentos que comprovem a correção dos dados cadastrais"},{"id":"e0c82490-71b7-4a64-8119-0a6cb2ceb7a7","value":"Analisar documentos"},{"id":"a85f144a-cf16-440e-b520-d7255defc7ac","value":"Há dúvidas ou dificuldades de leitura em relação aos documentos?"},{"id":"e0e7ec54-55cd-4f9c-81b0-0e18e890662a","value":"Liberar acesso externo para o aluno"},{"id":"b51d68a1-d2c6-46fe-9b90-f6889a250345","value":"Incluir documento 872 - Despacho Simples"},{"id":"c1519242-a482-4de4-bf2c-e5e8c65f2245","value":""},{"id":"b216544c-f8fb-4e21-8b15-771ca4b5c0f5","value":"Atualizar os dados do aluno na plataforma SEI"},{"id":"a6dcb52d-9bc4-4779-9627-f7517600910b","value":"Atualizar SIE com dados conforme documentos anexados"},{"id":"898a9a70-8a25-4fb3-977e-4695bb7f8f30","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"85651f51-6b5a-4a91-afe0-95130e896974","value":"Resolver problemas encontrados com a documentação"},{"id":"4a564b7f-dc2c-4e22-8ab0-923dbff8f203","value":"Anexar em PDF documentos com problemas resolvidos"},{"id":"e085e5ca-5b50-4a0f-beb9-b75eafeeea65","value":""},{"id":"92df4cac-0899-4919-8c0d-7dce34400659","value":"Atualizar dados do aluno nos sistemas do NTI"},{"id":"f4b71ec0-76bf-43dd-ac2a-df841a3eba24","value":"Incluir documento 872 - Despacho simples"},{"id":"6937438b-d5cf-46e7-822c-6d1d5945f6fd","value":"Incluir documento 872 - Despacho simples"},{"id":"9fbf4537-a36e-4419-a15f-fd46d12fc00a","value":""},{"id":"a9717e87-342f-4dad-82d2-9269852c8846","value":"Comunicar ao aluno  sobre a atualização dos dados"},{"id":"5ce940f6-dc89-419c-9745-ee5f7231d827","value":"Incluir documento 872 - Despacho simples"},{"id":"33ccefd7-29c9-489e-8c49-84505a87aa4e","value":"Alterar nível de acesso do processo para Restrito"},{"id":"0a4cd593-cc39-473a-bb1c-8f8a4079370e"},{"id":"d7dbf677-df75-4053-9f97-577488181258"},{"id":"1011c929-3e08-4acf-ae00-53b6834f65d2"},{"id":"4d2ae3e0-8c77-4d1a-ad33-9d95ef6c615c"},{"id":"fc0b138e-d225-46fa-b0a8-7f00a5e2dcc0"},{"id":"639a536a-a8a4-483f-8ac2-2ec89b38df85"},{"id":"1c3e17b3-c45b-406d-a9d2-699e0a590f34"},{"id":"65ff54fe-7d8e-4622-a905-82a30a75f88e"},{"id":"dc976450-4152-4116-beb3-73c32213daa2"},{"id":"74991c57-1034-4c23-a864-db9188ed2b69"},{"id":"36945551-5748-4929-bef8-cc9c55e7ca0e"},{"id":"688d5413-d331-4da5-913d-eb94d9fce916"},{"id":"e396c4f8-048f-46dc-bc1e-dc09ca16e061"},{"id":"04778d4c-36fc-42d8-9114-b66dcd567f18"},{"id":"64e071ac-122d-401d-ac78-39b54fd12061"},{"id":"16f839b9-5da0-4b87-8324-4a51ff14a610"},{"id":"79b1a3ac-e922-4731-96b1-a2a1b07eaf5b"},{"id":"4d368d1c-290c-4a47-8528-8f0d00caab94"}]}]}