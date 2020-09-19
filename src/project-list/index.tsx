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

const Item = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemText = styled.Text`
  color: blue;
`;

const DynoButton = styled.Button`
  background-color: red;
  border-radius: 4px;
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
      title={`Restart All Dynos`}
      onPress={() => restartDynos(appId)}
    />
  </Item>
);

export const ProjectList: FC = () => {
  const { projectList, restartDynos } = useProjectList();

  return (
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
  );
};
