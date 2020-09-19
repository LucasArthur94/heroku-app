import React, { FC } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { useProjectList } from "./project-list.hook";

const ProjectListWrapper = styled(FlatList as new () => FlatList<Project>)`
  display: flex;
  flex-direction: column;
  padding: 4px;
  margin: 4px;
`;

const Title = styled.Text`
  font-size: 36px;
  text-align: center;
  color: white;
`;

const Item = styled.View`
  border: 2px solid white;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px;
  padding: 8px;
`;

const ItemText = styled.Text`
  color: white;
  font-size: 20px;
`;

const DynoButton = styled.Button`
  border-radius: 8px;
  margin: 4px;
  color: white;
`;

const ItemComponent: FC<{
  title: string;
  appId: string;
  restartDynos: (appId: string) => Promise<{ success: boolean }>;
}> = ({ title, appId, restartDynos }) => (
  <Item>
    <ItemText>{title}</ItemText>
    <DynoButton
      title="Restart All Dynos"
      color="red"
      onPress={() => restartDynos(appId)}
    />
  </Item>
);

export const ProjectList: FC = () => {
  const { projectList, restartDynos } = useProjectList();

  return (
    <>
      <Title>Heroku Emergency App</Title>
      <ProjectListWrapper
        data={projectList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemComponent
            title={item.name}
            appId={item.id}
            restartDynos={restartDynos}
          />
        )}
      />
    </>
  );
};
